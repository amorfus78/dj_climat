import classNames from "classnames";
import { Field } from "formik";

const FormField = (props) => {
  const {
    name,
    label,
    className,
    placeholder,
    isTextArea,
    type,
    value,
    replaceDefaultClassName,
  } = props;
  const defaultClassName = "flex flex-col gap-2";

  return (
    <Field name={name}>
      {({ field, meta }) => (
        <label
          className={classNames(
            replaceDefaultClassName
              ? replaceDefaultClassName
              : defaultClassName,
            className
          )}
        >
          <span className="text-sm font-semibold text-my-dark-brown whitespace-pre-wrap">
            {label}
          </span>
          {isTextArea ? (
            <textarea
              {...field}
              className="border-2 border-my-dark-brown px-2 py-1 h-48 resize-none"
              placeholder={placeholder ?? label}
            />
          ) : (
            <input
              type={type || "text"}
              {...field}
              value={value}
              className="border-2 border-my-dark-brown px-2 py-1"
              placeholder={placeholder ?? label}
            />
          )}
          {meta.touched && meta.error ? (
            <span className="text-sm text-red-600 flex gap-2 items-center"></span>
          ) : null}
        </label>
      )}
    </Field>
  );
};

export default FormField;
