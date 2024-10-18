import Link from "next/link";

export default function PhotoPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">사진 페이지</h1>
      <p>이것은 전체 페이지 버전의 사진 페이지입니다.</p>
      <Link href={`/photo/2`}>Link to page 2</Link>
    </div>
  );
}
