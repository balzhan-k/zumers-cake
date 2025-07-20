import React, { TextareaHTMLAttributes } from "react";

interface FormTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
}

const FormTextArea = React.forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  ({ id, ...rest }, ref) => {
    return (
      <textarea
        id={id}
        ref={ref} 
        {...rest} 
        className="p-3 border rounded-lg w-full text-sm focus:ring-rose-500 focus:border-rose-500 shadow-sm focus:outline-none" 
      />
    );
  }
);

FormTextArea.displayName = "FormTextArea";

export default FormTextArea;
