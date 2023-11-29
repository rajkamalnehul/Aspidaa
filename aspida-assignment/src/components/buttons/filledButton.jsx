export default function FilledButton(props) {
  const { label = "", className = "", ...restProps } = props;
  return (
    <button
      className={`w-full bg-black outline-none border border-[#D9D9D9] focus:ring-0 or focus:ring-transparent text-[14px] text-white px-4 py-2  rounded-lg bg-grey-200 shadow-sm ${className}`}
      {...(restProps || {})}
    >
      {label}
    </button>
  );
}
