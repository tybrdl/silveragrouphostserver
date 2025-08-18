export default function UsersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Users</h1>
      <p className="text-zinc-400">Manage users and permissions</p>

      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-12 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">User Management</h2>
        <p className="text-zinc-400 max-w-md mx-auto">
          This section will allow you to manage users, roles, and permissions for the admin panel.
        </p>
      </div>
    </div>
  )
}
