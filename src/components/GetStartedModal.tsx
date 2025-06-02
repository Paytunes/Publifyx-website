
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import GetStartedForm from "./GetStartedForm";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetStartedModal = ({ isOpen, onClose }: GetStartedModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-600 mb-2">
            Get started for free
          </DialogTitle>
          <p className="text-gray-600 text-left">
            Get started with your free agency dashboard—upgrade anytime to unlock full white-label branding! Contact us at{" "}
            <a href="mailto:support@publifyx.com" className="text-blue-600 hover:underline">
              support@publifyx.com
            </a>
          </p>
        </DialogHeader>
        
        <GetStartedForm onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default GetStartedModal;
