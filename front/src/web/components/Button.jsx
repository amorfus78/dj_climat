import clsx from "clsx"

const variants = {
  primary:
    "bg-gray-100 text-green-400 rounded m-8 py-2 px-4 border-b-4 border-slay-100 hover:border-green-100",
  secondary:
    "bg-blue-500 hover:bg-blue-700 text-green-400 font-bold py-2 px-4 rounded",
}

const sizes = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
}

const Button = (props) => {
  const { variant = "primary", size = "md", className, ...otherProps } = props

  return (
    <button
      className={clsx(variants[variant], sizes[size], className)}
      {...otherProps}
    />
  )
}

export default Button