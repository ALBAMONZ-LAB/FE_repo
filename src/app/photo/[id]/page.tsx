"use client";

import Link from "next/link";

type PhotoPageProps = {
  params: {
    id: string;
  };
};

const PhotoPage = ({ params: { id } }: PhotoPageProps) => {
  return (
    <div>
      <Link href="/">Back</Link>
      <p>상세 페이지</p>
      <p>{id}</p>
    </div>
  );
};

export default PhotoPage;
