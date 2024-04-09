import { Microscope } from 'lucide-react'

import { Alert_Shadcn_, AlertDescription_Shadcn_, AlertTitle_Shadcn_ } from 'ui'

const AiWarning = ({ className }: { className?: string }) => (
  <Alert_Shadcn_ className={className}>
    <AlertTitle_Shadcn_>
      Supabase AI is experimental and may produce incorrect answers.
    </AlertTitle_Shadcn_>
    <AlertDescription_Shadcn_>
      <Microscope strokeWidth={1.5} size={18} className="text-foreground-muted" />
      <p>Always verify the output before executing.</p>
    </AlertDescription_Shadcn_>
  </Alert_Shadcn_>
)

export { AiWarning }
