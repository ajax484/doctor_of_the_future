import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  
  interface ModalProps {
    isOpen: boolean;
    onChange: (open: boolean) => void;
    title: string;
    description: string;
    children: React.ReactNode;
  }
  
  const Modal = ({
    isOpen,
    onChange,
    title,
    description,
    children,
  }: ModalProps) => {
    return (
      <Dialog open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">{title}</DialogTitle>
            <DialogDescription className=" text-center">{description}</DialogDescription>
          </DialogHeader>
          {/* supabase ui login */}
          <div>{children}</div>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default Modal;
  