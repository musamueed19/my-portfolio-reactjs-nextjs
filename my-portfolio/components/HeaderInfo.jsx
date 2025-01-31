const HeaderInfo = ({Icon, label}) => {
    return (
    <div className="flex items-center space-x-1.5">
      {Icon}
      <span className="capitalize text-sm md:text-base font-semibold text-zinc-900 dark:text-zinc-200/90">
        {label}
      </span>
    </div>
  );
};

export default HeaderInfo;
