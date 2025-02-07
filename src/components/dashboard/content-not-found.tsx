import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

export default function ContentNotFound() {
    return (
        <Alert variant='destructive'>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Content not Found!</AlertTitle>
            <AlertDescription>
                Pleace, provide a valid Id
            </AlertDescription>
        </Alert>

    )
}