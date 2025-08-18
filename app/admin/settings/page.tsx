export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Settings</h1>
      <p className="text-zinc-400">Configure website settings</p>

      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-12 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Website Configuration</h2>
        <p className="text-zinc-400 max-w-md mx-auto">
          This section will allow you to configure various settings for the website, including SEO, social media, and
          general preferences.
        </p>
      </div>
    </div>
  )
}
