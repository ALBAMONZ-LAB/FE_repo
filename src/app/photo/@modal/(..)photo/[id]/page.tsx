"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { useRouter } from "next/navigation";

type PhotoModalProps = {
  params: {
    id: string;
  };
};

const PhotoModal = ({ params: { id } }: PhotoModalProps) => {
  const router = useRouter();

  return (
    <>
      <h1>Modal Page!!!! {id}</h1>
      <Link href="/photo">Back</Link>
      <Dialog
        open={true}
        onOpenChange={() => {
          router.back();
        }}
      >
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PhotoModal;
