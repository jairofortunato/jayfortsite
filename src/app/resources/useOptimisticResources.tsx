
import { type Resource, type CompleteResource } from "@/lib/db/schema/resources";
import { OptimisticAction } from "@/lib/utils";
import { useOptimistic } from "react";

export type TAddOptimistic = (action: OptimisticAction<Resource>) => void;

export const useOptimisticResources = (
  resources: CompleteResource[],
  
) => {
  const [optimisticResources, addOptimisticResource] = useOptimistic(
    resources,
    (
      currentState: CompleteResource[],
      action: OptimisticAction<Resource>,
    ): CompleteResource[] => {
      const { data } = action;

      // potential issue - loop over relations [COME BACK TO THIS]
      

      const optimisticResource = {
        ...data,
        
        id: "optimistic",
      };

      switch (action.action) {
        case "create":
          return currentState.length === 0
            ? [optimisticResource]
            : [...currentState, optimisticResource];
        case "update":
          return currentState.map((item) =>
            item.id === data.id ? { ...item, ...optimisticResource } : item,
          );
        case "delete":
          return currentState.map((item) =>
            item.id === data.id ? { ...item, id: "delete" } : item,
          );
        default:
          return currentState;
      }
    },
  );

  return { addOptimisticResource, optimisticResources };
};
