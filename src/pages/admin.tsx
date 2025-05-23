import Layout from '../components/Layout'

export default function AdminDashboard() {
  return (
    <Layout>
      <main className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">AI-Generated Posts (Preview)</h2>
          <div className="p-4 bg-white border rounded mb-4">[Mock AI Post #1]</div>
          <div className="p-4 bg-white border rounded mb-4">[Mock AI Post #2]</div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Scheduled Social Posts</h2>
          <div className="p-4 bg-white border rounded mb-4">[Mock Scheduled Post #1]</div>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">AdSense Report (Demo)</h2>
          <div className="p-4 bg-white border rounded">[AdSense earnings preview]</div>
        </section>
      </main>
    </Layout>
  )
}