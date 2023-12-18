"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { type Resource, CompleteResource } from "@/lib/db/schema/resources";
import Modal from "@/components/shared/Modal";

import { useOptimisticResources } from "@/app/resources/useOptimisticResources";
import { Button } from "@/components/ui/button";
import ResourceForm from "./ResourceForm";
import { PlusIcon } from "lucide-react";

type TOpenModal = (resource?: Resource) => void;

export default function ResourceList({
  resources,
   
}: {
  resources: CompleteResource[];
   
}) {
  const { optimisticResources, addOptimisticResource } = useOptimisticResources(
    resources,
     
  );
  const [open, setOpen] = useState(false);
  const [activeResource, setActiveResource] = useState<Resource | null>(null);
  const openModal = (resource?: Resource) => {
    setOpen(true);
    resource ? setActiveResource(resource) : setActiveResource(null);
  };
  const closeModal = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        setOpen={setOpen}
        title={activeResource ? "Edit Resource" : "Create Resource"}
      >
        <ResourceForm
          resource={activeResource}
          addOptimistic={addOptimisticResource}
          openModal={openModal}
          closeModal={closeModal}
          
        />
      </Modal>
      <div className="absolute right-0 top-0 ">
        <Button onClick={() => openModal()} variant={"outline"}>
          +
        </Button>
      </div>
      {optimisticResources.length === 0 ? (
        <EmptyState openModal={openModal} />
      ) : (
        <ul>
          {optimisticResources.map((resource) => (
            <Resource
              resource={resource}
              key={resource.id}
              openModal={openModal}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

const Resource = ({
  resource,
  openModal,
}: {
  resource: CompleteResource;
  openModal: TOpenModal;
}) => {
  const optimistic = resource.id === "optimistic";
  const deleting = resource.id === "delete";
  const mutating = optimistic || deleting;
  return (
    <li
      className={cn(
        "flex justify-between my-2",
        mutating ? "opacity-30 animate-pulse" : "",
        deleting ? "text-destructive" : "",
      )}
    >
      <div className="w-full">
        <div>{resource.titles}</div>
      </div>
      <Button
        onClick={() => openModal(resource)}
        disabled={mutating}
        variant={"ghost"}
      >
        Edit
      </Button>
    </li>
  );
};

const EmptyState = ({ openModal }: { openModal: TOpenModal }) => {
  return (
    <div className="text-center">
      <h3 className="mt-2 text-sm font-semibold text-secondary-foreground">
        No resources
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Get started by creating a new resource.
      </p>
      <div className="mt-6">
        <Button onClick={() => openModal()}>
          <PlusIcon className="h-4" /> New Resource
        </Button>
      </div>
    </div>
  );
};
