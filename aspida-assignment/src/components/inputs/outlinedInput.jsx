export default function OutlinedInput(props) {
  const { label = "", className = "", ...restProps } = props;
  return (
    <input
      placeholder={label}
      required
      className={`w-full outline-none border border-[#D9D9D9] placeholder-grey-dark focus:ring-0 or focus:ring-transparent placeholder:font-[300] placeholder:text-[rgba(60, 60, 60, 0.68)] text-[14px] px-4 py-2  rounded-lg bg-grey-200 shadow-sm ${className}`}
      {...(restProps || {})}
    />
  );
}
