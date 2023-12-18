import { z } from "zod";

import { useState, useTransition } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useValidatedForm } from "@/lib/hooks/useValidatedForm";

import { type Action, cn } from "@/lib/utils";
import { type TAddOptimistic } from "@/app/resources/useOptimisticResources";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";


import { type Resource, insertResourceParams } from "@/lib/db/schema/resources";
import {
  createResourceAction,
  deleteResourceAction,
  updateResourceAction,
} from "@/lib/actions/resources";


const ResourceForm = ({
  
  resource,
  openModal,
  closeModal,
  addOptimistic,
  postSuccess,
}: {
  resource?: Resource | null;
  
  openModal?: (resource?: Resource) => void;
  closeModal?: () => void;
  addOptimistic?: TAddOptimistic;
  postSuccess?: () => void;
}) => {
  const { errors, hasErrors, setErrors, handleChange } =
    useValidatedForm<Resource>(insertResourceParams);
  const { toast } = useToast();
  const editing = !!resource?.id;
  
  const [isDeleting, setIsDeleting] = useState(false);
  const [pending, startMutation] = useTransition();

  const router = useRouter();

  const onSuccess = (
    action: Action,
    data?: { error: string; values: Resource },
  ) => {
    const failed = Boolean(data?.error);
    if (failed) {
      openModal && openModal(data?.values);
    } else {
      router.refresh();
      postSuccess && postSuccess();
    }

    toast({
      title: failed ? `Failed to ${action}` : "Success",
      description: failed ? data?.error ?? "Error" : `Resource ${action}d!`,
      variant: failed ? "destructive" : "default",
    });
  };

  const handleSubmit = async (data: FormData) => {
    setErrors(null);

    const payload = Object.fromEntries(data.entries());
    const resourceParsed = await insertResourceParams.safeParseAsync(payload);
    if (!resourceParsed.success) {
      setErrors(resourceParsed?.error.flatten().fieldErrors);
      return;
    }

    closeModal && closeModal();
    const values = resourceParsed.data;
    try {
      startMutation(async () => {
        addOptimistic && addOptimistic({
          data: {
            ...values,            
            id: editing ? resource.id : "",
          },
          action: editing ? "update" : "create",
        });

        const error = editing
          ? await updateResourceAction({ ...values, id: resource.id })
          : await createResourceAction(values);

        const errorFormatted = {
          error: error ?? "Error",
          values: editing
            ? { ...resource, ...values }
            : { ...values, id: "", userId: "" }, 
        };
        onSuccess(
          editing ? "update" : "create",
          error ? errorFormatted : undefined,
        );
      });
    } catch (e) {
      if (e instanceof z.ZodError) {
        setErrors(e.flatten().fieldErrors);
      }
    }
  };

  return (
    <form action={handleSubmit} onChange={handleChange} className={"space-y-8"}>
      {/* Schema fields start */}
              <div>
        <Label
          className={cn(
            "mb-2 inline-block",
            errors?.titles ? "text-destructive" : "",
          )}
        >
          Titles
        </Label>
        <Input
          type="text"
          name="titles"
          className={cn(errors?.titles ? "ring ring-destructive" : "")}
          defaultValue={resource?.titles ?? ""}
        />
        {errors?.titles ? (
          <p className="text-xs text-destructive mt-2">{errors.titles[0]}</p>
        ) : (
          <div className="h-6" />
        )}
      </div>
      {/* Schema fields end */}

      {/* Save Button */}
      <SaveButton errors={hasErrors} editing={editing} />

      {/* Delete Button */}
      {editing ? (
        <Button
          type="button"
          disabled={isDeleting || pending || hasErrors}
          variant={"destructive"}
          onClick={() => {
            setIsDeleting(true);
            closeModal && closeModal();
            startMutation(async () => {
              addOptimistic && addOptimistic({ action: "delete", data: resource });
              const error = await deleteResourceAction(resource.id);
              setIsDeleting(false);
              const errorFormatted = {
                error: error ?? "Error",
                values: resource,
              };

              onSuccess("delete", error ? errorFormatted : undefined);
            });
          }}
        >
          Delet{isDeleting ? "ing..." : "e"}
        </Button>
      ) : null}
    </form>
  );
};

export default ResourceForm;

const SaveButton = ({
  editing,
  errors,
}: {
  editing: Boolean;
  errors: boolean;
}) => {
  const { pending } = useFormStatus();
  const isCreating = pending && editing === false;
  const isUpdating = pending && editing === true;
  return (
    <Button
      type="submit"
      className="mr-2"
      disabled={isCreating || isUpdating || errors}
      aria-disabled={isCreating || isUpdating || errors}
    >
      {editing
        ? `Sav${isUpdating ? "ing..." : "e"}`
        : `Creat${isCreating ? "ing..." : "e"}`}
    </Button>
  );
};
