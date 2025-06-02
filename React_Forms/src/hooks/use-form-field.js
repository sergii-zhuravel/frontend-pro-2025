import React from "react";

export const useFormField = (initialValue = "") => {
  const [field, setField] = React.useState(initialValue);
  const onFieldChange = React.useCallback((event) => {
    setField(event.target.value);
  });

  return [field, onFieldChange];
};
