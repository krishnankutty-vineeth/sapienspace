// "use client";

// import { useUser } from "../../context/UserContext";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// import PlatformSidebar from "../../../components/platform/PlatformSidebar";
// import PlatformTopbar from "../../../components/platform/PlatformTopbar";
// import ProjectList from "../../../components/platform/ProjectList";
// import DatasetTable from "../../../components/platform/DatasetTable";
// import ExperimentTracker from "../../../components/platform/ExperimentTracker";
// import AiAssistant from "../../../components/platform/AiAssistant";

// // export default function DashboardPage() {
// //   const { user } = useUser();
// //   const router = useRouter();

// //   useEffect(() => {
// //     if (!user) router.push("/login");
// //   }, [user, router]);


// //   if (!user) return null;
// // }
// export default function DashboardPage() {
// return (
//     <div className="min-h-screen bg-[#020826] text-white">
//     <div className="flex">
//         <PlatformSidebar />

//         <div className="flex-1 min-h-screen">
//         <PlatformTopbar />

//         <main className="p-6 lg:p-10">
//             {/* Top Row: Projects + AI Assistant */}
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//             <div className="lg:col-span-2">
//                 <h2 className="text-2xl font-semibold mb-4">Active Projects</h2>
//                 <ProjectList />
//             </div>

//             <div className="space-y-6">
//                 <AiAssistant />
//                 <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
//                 <h3 className="font-semibold mb-2">Quick Actions</h3>
//                 <div className="flex flex-col gap-3">
//                     <button className="px-3 py-2 rounded bg-sky-500/90 text-[#021022] font-medium">Create Project</button>
//                     <button className="px-3 py-2 rounded border border-white/10">Upload Dataset</button>
//                     <button className="px-3 py-2 rounded border border-white/10">Start Experiment</button>
//                 </div>
//                 </div>
//             </div>
//             </div>

//             {/* Middle Row: Datasets + Experiments */}
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             <div className="lg:col-span-2">
//                 <h2 className="text-2xl font-semibold mb-4">Datasets</h2>
//                 <DatasetTable />
//             </div>

//             <div>
//                 <h2 className="text-2xl font-semibold mb-4">Experiment Tracker</h2>
//                 <ExperimentTracker />
//             </div>
//             </div>

//             {/* Footer summary */}
//             <div className="mt-8 p-6 rounded-2xl bg-white/3 border border-white/8">
//             <p className="text-slate-300 text-sm">
//                 Tip: Connect this dashboard to the Sapienspace API (FastAPI) and AI microservices (ai-core, ai-observatory) to enable live experiments, dataset uploads, model runs, and knowledge-graph generation.
//             </p>
//             </div>
//         </main>
//         </div>
//     </div>
//     </div>
// );
// }
