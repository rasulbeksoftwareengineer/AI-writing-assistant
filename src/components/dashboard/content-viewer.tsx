import { ClipboardIcon, PencilIcon, Save, SaveOff, ShareIcon } from 'lucide-react';
import { Button } from "../ui/button"
import { Card, CardContent, CardFooter } from "../ui/card";
import toast from 'react-hot-toast';
import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { TGeneratedContent } from '@/shared/types/generated-content';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { TooltipProvider } from '@radix-ui/react-tooltip';
type ContentViewerProps = {
    generetedContent: TGeneratedContent;
    onSave: (generatedContent: TGeneratedContent) => void;
}
export default function ContentViewer({ generetedContent, onSave }: ContentViewerProps) {

    enum Mode {
        View,
        Edit
    }

    const [editedContent, setEditedContent] = useState<string>(generetedContent.content)

    const [mode, setMode] = useState<Mode>(Mode.View);


    const handleCopy = async () => {
        try {

            await navigator.clipboard.writeText(generetedContent.content);

            toast.success('Copy')
        }

        catch (e) {
            console.error('[Error] failed to copy clipboard', e);
            toast.error('No Copy')
        }
    }

    const handleEdit = () => {
        setMode(Mode.Edit);
    }

    const handleContentChange = (value?: string) => {
        setEditedContent(value || '')
    }

    const handleCancel = () => {
        setMode(Mode.View);
        setEditedContent(generetedContent.content);
    }

    const handleSave = () => {
        onSave({ ...generetedContent, content: editedContent });
        setMode(Mode.View)
    }

    const handleShare = async () => {
        try {

            const {origin} = window.location;

            await navigator.clipboard.writeText(`${origin}/share/${generetedContent.id}`);

            toast.success('Share link successfuly copied to clipboard')
        }

        catch (e) {
            console.error('[Error] failed to copy clipboard', e);
            toast.error('No Copy')
        }
    }

    return mode === Mode.View ? (

        <Card className="mt-4 shadow-xl">

            <CardContent className="p-4 md:p-6">
                <MDEditor.Markdown source={editedContent} style={{ whiteSpace: 'pre-wrap' }} className='rounded p-4' />
            </CardContent>

            <CardFooter className="flex gap-2 justify-end">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button onClick={handleEdit}>
                                <PencilIcon className="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Edit</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button onClick={handleShare}>
                                <ShareIcon className="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Share</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button onClick={handleCopy}>
                                <ClipboardIcon className="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Copy</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </CardFooter>

        </Card>

    ) : <div>

        <MDEditor
            height={400}
            className='mt-4'
            value={editedContent}
            onChange={handleContentChange}
        />

        <div className='mt-4 flex gap-2 border'>

            <Button onClick={handleSave}>
                Save
                <Save className="h-4 w-4" />
            </Button>

            <Button variant='destructive' onClick={handleCancel}>
                Cancel
                <SaveOff className="h-4 w-4" />
            </Button>
        </div>

    </div>
}