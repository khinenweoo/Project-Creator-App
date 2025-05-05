import { Head } from '@inertiajs/react';
import Layout from "@/Layouts/layout/layout.jsx";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constants";
import TasksTable from '../Task/TasksTable';
import { Button } from 'primereact/button';

export default function Show({ auth, project, tasks, queryParams }) {
    return (
        <Layout>
            <Head title="Project View" />
            <div className='block-viewer'>
                <div className='block-section'>
                    <div className='block-header'>
                        <div className="block-title">
                            <h4>Project Detail</h4>
                        </div>
                    </div>
                    <div className='block-content'>
                        <div className="grid">
                            <div className="col-12">
                                <div className="max-w-7xl mx-auto">
                                    <div className='overflow-hidden'>
                                        <div className="relative px-4 shadow-mdrounded-md">
                                            <img src={project.data.image_path}
                                                alt=""
                                                className="w-full h-full md:h-28rem"
                                            />
                                        </div>
                                        <div className="p-6 text-gray-900 dark:text-gray-100">
                                            <div className='title'>
                                                <p className="font-bold text-lg">{project.data.name}</p>
                                               
                                            </div>
                                            <div className="body">
                                                <div className="grid mt-2">
                                                    {/* col 1 */}
                                                    <div className='col'>
                                                        <div className="grid gap-4 grid-cols-2 mt-4 justify-items-center">
                                                            <Button icon="pi pi-bookmark" outlined severity="warning" />

                                                            <div className="mt-1">
                                                                <label className="text-lg mb-2">Status</label>
                                                                <div
                                                                    className={
                                                                        "px-2 py-1 font-bold text-white border-round " +
                                                                        PROJECT_STATUS_CLASS_MAP[project.data.status]
                                                                    }
                                                                >

                                                                    {PROJECT_STATUS_TEXT_MAP[project.data.status]}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* col2 */}
                                                    <div className='col'>
                                                        <div className="grid gap-4 grid-cols-2 mt-4 justify-items-center">
                                                            <Button icon="pi pi-user" outlined severity="info" />
                                                            <div>
                                                                <label className="text-lg mb-2">Created By</label>
                                                                <p className="font-bold mt-1">{project.data.createdBy.name}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* col 3 */}
                                                    <div className='col'>
                                                        <div>
                                                            <div className="grid gap-4 grid-cols-2 mt-4 justify-items-center">
                                                                <Button icon="pi pi-bell" outlined severity="danger" />
                                                                <div>
                                                                    <label className="text-lg mb-2">Due Date</label>
                                                                    <p className="font-bold mt-1">{project.data.due_date}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid mt-4">
                                                    <p className="mt-1">{project.data.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block-viewer">
                <div className="block-section">
                    <div className="block-header">
                        <div className="block-title">
                            <span>Project's Tasks</span>
                        </div>
                    </div>
                    <div className="block-content">
                        <TasksTable tasks={tasks} queryParams={queryParams} hideProjectColumn={true} />
                    </div>
                </div>
            </div>
        </Layout>
    );
}