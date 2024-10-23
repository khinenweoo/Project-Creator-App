import { Head, Link, router } from "@inertiajs/react";
import Layout from "@/Layouts/layout/layout.jsx";

export default function Index({ auth, projects, queryParams = null }) {
    queryParams = queryParams || {};

    return (
        <Layout>
            <Head title="Projects" />
            <div className="grid">
                <div className="col-12">
                    <div className="card">

                        <div className="p-dataview p-component p-dataview-grid" data-pc-name="dataview" data-pc-section="root">
                            <div className="p-dataview-header" data-pc-section="header">
                                <div className="flex flex-column md:flex-row md:justify-content-between gap-2">
                                    <h4>Projects</h4>
                                    <div className="">
                                        <span className="p-input-icon-left"><i class="pi pi-search"></i>
                                            <input className="p-inputtext p-component" placeholder="Search by Name" data-pc-name="inputtext" data-pc-section="root" value="" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* project data content */}
                            <div className="p-dataview-content" data-pc-section="content">
                                <div className="p-grid grid p-nogutter grid-nogutter" data-pc-section="grid">
                                    {projects.data.map((project) => (
                                        <div className="col-12 lg:col-4">
                                            <div className="card m-1 px-3 border-1 surface-border">
                                                <div className="flex flex-wrap gap-2 align-items-center justify-content-between mb-2">
                                                    <div className="lesson_name">
                                                        <h6 className="fw-bold hover:underline text-nowrap">
                                                            <Link href={route('project.show', project.id)} className="text-gray-100 h-9" >
                                                                {project.name}
                                                            </Link>
                                                        </h6>
                                                    </div>
                                                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                        <button type="button" class="p-button p-component p-button-icon-only p-button-text p-button-outlined p-button-success mr-2" data-bs-toggle="modal" data-bs-target="#editproject">
                                                            <i className="pi pi-file-edit" />
                                                        </button>
                                                        <button type="button" class="p-button p-component p-button-icon-only p-button-text p-button-outlined p-button-danger" data-bs-toggle="modal" data-bs-target="#deleteproject">
                                                            <i className="pi pi-trash" />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="grid pt-4">
                                                    <div className="col-6">
                                                        <div className="flex align-items-center justify-between">
                                                            <div class="flex align-items-center justify-content-center border-round w-4 h-2">
                                                                <i class="pi pi-users text-xl"></i>
                                                            </div>
                                                            <span>2 Members</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="flex align-items-center justify-between">
                                                            <div class="flex align-items-center justify-content-center border-round w-4 h-2">
                                                                <i class="pi pi-calendar-times text-xl"></i>
                                                            </div>
                                                            <span>2 Months</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid mt-2">
                                                    <div className="col-6">
                                                        <div className="flex align-items-center justify-between">
                                                            <div class="flex align-items-center justify-content-center border-round w-4 h-2">
                                                                <i class="pi pi-list text-xl"></i>
                                                            </div>
                                                            <span>16 Tasks</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="flex align-items-center justify-between">
                                                            <div class="flex align-items-center justify-content-center border-round w-4 h-2">
                                                                <i class="pi pi-flag-fill text-xl"></i>
                                                            </div>
                                                            <span>27 Oct</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr class="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto"></hr>
                                                <div class="flex align-items-center justify-content-between mb-2">
                                                    <h6 class="fw-bold mb-0">Progress</h6>
                                                    <div class="flex align-items-center justify-content-center bg-green-200 border-round p-2">
                                                        <span className="text-gray-900 text-sm">Completed</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}