import React from "react";

interface ILoading {
  loading: boolean;
  children: React.ReactNode;
  error: boolean;
}

const Loading: React.FC<ILoading> = ({ loading, children, error }) => {
  if (loading)
    return (
      <div className="flex justify-center items-center w-full h-80">
        <div className="h-12 w-12 rounded-full border-t-black border-r-black border-l-zinc-200 border-b-zinc-200 border-4 animate-spin" />
      </div>
    );

  if (error) return <>An error has occured</>;

  return <>{children}</>;
};

export default Loading;
