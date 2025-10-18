const NoContent = ({ message }: { message: string }) => {
  return (
    <div className="flex w-full text-center justify-center font-bold bg-white dark:bg-gray-800 dark:text-white">
      {message}
    </div>
  );
};

export default NoContent;
