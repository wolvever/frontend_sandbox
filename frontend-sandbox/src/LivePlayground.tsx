import { LiveProvider, LiveEditor, LivePreview } from 'react-live'
import { Button } from '@/components/ui/button'

export default function LivePlayground() {
  const scope = { Button }
  const code = `<Button className="bg-primary text-white">Edit me</Button>`
  return (
    <LiveProvider code={code} scope={scope} noInline>
      <LiveEditor className="border p-4 rounded-md" />
      <LivePreview className="mt-4 p-4 border rounded-md" />
    </LiveProvider>
  )
}
