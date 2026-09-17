import { useObjects } from "../../model/object.store";
import { ObjectItem } from "../ObjectItem/ObjectItem";

export const ObjectList = () => {
  const objects = useObjects();

  return (
    <>
      {objects.map((obj) => (
        <ObjectItem
          key={obj.id} 
          data={obj}
        />
      ))}
    </>
  );
};