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
                                <div className=" mx-auto">
                                    <div className='overflow-hidden mx-4 my-4 flex flex-column md:flex-row justify-content-around align-items-center'>
                                        <div className="flex-1 relative shadow-mdrounded-md md:mr-3">
                                            <img src={project.data.image_path}
                                                alt=""
                                                className="w-auto h-full md:h-18rem"
                                            />
                                        </div>
                                        <div className="flex-1 text-gray-900 dark:text-gray-100">
                                            <div className='title'>
                                                <p className="font-bold text-lg">{project.data.name}</p>
                                            </div>
                                            <div className="body px-2">
                                                <div className="grid mt-2">
                                                    {/* col 1 */}
                                                    <div className='col'>
                                                        <div className="grid gap-2 grid-cols-2 mt-4 justify-items-center">
                                                            <Button icon="pi pi-bookmark" size='small' outlined severity="warning" />

                                                            <div className="mt-1">
                                                                <label className="text-md mb-4">Status</label>
                                                                <div
                                                                    className={
                                                                        "px-1 py-1 font-bold text-white border-round " +
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
                                                        <div className="grid gap-2 grid-cols-2 mt-4 justify-items-center">
                                                            <Button icon="pi pi-user" outlined severity="info" />
                                                            <div>
                                                                <label className="text-md mb-3">Created By</label>
                                                                <p className="font-bold mt-2">{project.data.createdBy.name}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* col 3 */}
                                                    <div className='col'>
                                                        <div>
                                                            <div className="grid gap-2 grid-cols-2 mt-4 justify-items-center">
                                                                <Button icon="pi pi-bell" outlined severity="danger" />
                                                                <div>
                                                                    <label className="text-md mb-3">Due Date</label>
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