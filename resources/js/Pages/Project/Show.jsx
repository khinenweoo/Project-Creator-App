import { Head } from '@inertiajs/react';
import Layout from "@/Layouts/layout/layout.jsx";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constants";
import TasksTable from '../Task/TasksTable';

export default function Show({ auth, project, tasks, queryParams }) {
    return (
        <Layout>
            <Head title="Project View" />

            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <div className="py-2">
                            <div className="max-w-7xl mx-auto sm:px-4 lg:px-6">
                                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                                    <div>
                                        <img src={project.data.image_path}
                                            alt=""
                                            className="w-full h-64 object-cover"
                                        />
                                    </div>
                                    <div className="p-4 text-gray-900 dark:text-gray-100">
                                        <div className="grid gap-4 grid-cols-2 mt-2 justify-around">
                                            <div>
                                                <div>
                                                    <label className="font-bold text-lg">Project Name</label>
                                                    <p className="mt-1">{project.data.name} </p>
                                                </div>
                                                <div className="mt-4">
                                                    <label className="font-bold text-lg">Project Status</label>
                                                    <p className="mt-1">
                                                        <span
                                                            className={
                                                                "px-2 py-1 text-gray-900 border-round " +
                                                                PROJECT_STATUS_CLASS_MAP[project.data.status]
                                                            }
                                                        >
                                                            
                                                            {PROJECT_STATUS_TEXT_MAP[project.data.status]}
                                                        </span>
                                                    </p>

                                                </div>
                                                <div className="mt-4">
                                                    <label className="font-bold text-lg">Created By</label>
                                                    <p className="mt-1">{project.data.createdBy.name}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <label className="font-bold text-lg">Due Date</label>
                                                    <p className="mt-1">{project.data.due_date}</p>
                                                </div>
                                                <div className="mt-4">
                                                    <label className="font-bold text-lg">Create Date</label>
                                                    <p className="mt-1">{project.data.created_at}</p>
                                                </div>
                                                <div className="mt-4">
                                                    <label className="font-bold text-lg">Updated By</label>
                                                    <p className="mt-1">{project.data.updatedBy.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <label className="font-bold text-lg">
                                                Project Description
                                            </label>
                                            <p className="mt-1">{project.data.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                    <TasksTable tasks={tasks} queryParams={queryParams} />
                    </div>
                </div>
            </div>
        </Layout>
    );
}