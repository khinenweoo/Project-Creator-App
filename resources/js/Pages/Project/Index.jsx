import { Head, Link, router } from "@inertiajs/react";
import Layout from "@/Layouts/layout/layout.jsx";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constants.jsx";
import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import { Button } from "primereact/button";

export default function Index({ auth, projects, queryParams = null, success }) {
    queryParams = queryParams || {};

    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value
        } else {
            delete queryParams[name]
        }

        router.get(route('project.index'), queryParams);
    };

    const onKeyPress = (name, e) => {
        if (e.key !== 'Enter') return;

        searchFieldChanged(name, e.target.value);
    }

    const deleteProject = (project) => {
        if (!window.confirm('Are you sure you want to delete the project?')) {
            return;
        }
        router.delete(route('project.destroy', project.id));
    }


    return (
        <Layout>
            <Head title="Projects" />
            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <div className="flex flex-row justify-content-between border-bottom-1 surface-border pb-4">
                            <div>
                                <div className="font-medium text-3xl text-900">Projects</div>
                            </div>
                            <div className="flex md:justify-content-end align-items-center lg:mt-0">
                                    <Link href={route('project.create')} >
                                            <Button label="Create Project" type="button" className="p-button-outlined mr-2" icon="pi pi-plus-circle" />
                                    </Link>
                            </div>
                        </div>
                        {success && (<div className="bg-teal-500 py-2 px-4 text-white border-teal-600 border-round mb-4">
                        {success}
                        </div>)}
                        <div className="p-dataview p-component p-dataview-grid" data-pc-name="dataview" data-pc-section="root">
                            <div className="p-dataview-header bg-white border-none p-0" data-pc-section="header">                            
                                <div className="mt-5 mb-3 w-full">
                                    <div className="flex flex-row justify-content-start flex-wrap gap-2 mb-2">
                                        <div className="text-search">
                                            <span className="p-input-icon-left"><i className="pi pi-search"></i>
                                                <TextInput
                                                    className="p-inputtext p-component"
                                                    placeholder="Search by Name"
                                                    onBlur={e => searchFieldChanged('name', e.target.value)}
                                                    onKeyPress={(e) => onKeyPress("name", e)}
                                                />
                                            </span>
                                        </div>
                                        <div className="dropdown-wrapper">

                                            <SelectInput
                                                className="border-round border-gray-300 block w-full h-full p-2"
                                                defaultValue={queryParams.status}
                                                onChange={e => searchFieldChanged('status', e.target.value)}
                                            >
                                                <option value="">Select Status</option>
                                                <option value="pending">Pending</option>
                                                <option value="in_progress">In Progress</option>
                                                <option value="completed">Completed</option>

                                            </SelectInput>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* project data content */}
                            <div className="p-dataview-content" data-pc-section="content">
                                <div className="p-grid grid p-nogutter grid-nogutter" data-pc-section="grid">
                                    {projects.data.map((project) => (
                                        <div className="col-12 lg:col-4" key={project.id}>
                                            <div className="card m-1 px-3 border-1 surface-border">
                                                <div className="flex flex-wrap gap-2 align-items-center justify-content-between mb-2">
                                                    <div className="lesson_name w-7 h-6">
                                                        <h6 className="fw-bold hover:underline text-nowrap">

                                                            <Link href={route('project.show', { project: project.id })} className="text-gray-800" >
                                                                {project.name}
                                                            </Link>
                                                        </h6>
                                                    </div>
                                                    <div className="btn-group flex justify-end w-4" >
                                                        <Link href={route('project.edit', { project: project.id })}>
                                                            <button type="button" className="p-button p-component p-button-icon-only p-button-outlined p-button-success mr-2">
                                                                <i className="pi pi-file-edit" />
                                                            </button>
                                                        </Link>

                                                        
                                                        <button 
                                                            type="button"
                                                            onClick={e => deleteProject(project)}
                                                            className="p-button p-component p-button-icon-only p-button-outlined p-button-danger"
                                                        >
                                                            <i className="pi pi-trash" />
                                                        </button>
                                                        
                                                    </div>
                                                </div>

                                                <div className="grid pt-4">
                                                    <div className="col-6">
                                                        <div className="flex align-items-center justify-between">
                                                            <div className="flex align-items-center justify-content-center border-round w-4 h-2">
                                                                <i className="pi pi-users text-xl"></i>
                                                            </div>
                                                            <span>2 Members</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="flex align-items-center justify-between">
                                                            <div className="flex align-items-center justify-content-center border-round w-4 h-2">
                                                                <i className="pi pi-calendar-times text-xl"></i>
                                                            </div>
                                                            <span>{project.duration}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid mt-2">
                                                    <div className="col-6">
                                                        <div className="flex align-items-center justify-between">
                                                            <div className="flex align-items-center justify-content-center border-round w-4 h-2">
                                                                <i className="pi pi-list text-xl"></i>
                                                            </div>
                                                            <span>{project.tasks} Tasks</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="flex align-items-center justify-between">
                                                            <div className="flex align-items-center justify-content-center border-round w-4 h-2">
                                                                <i className="pi pi-flag-fill text-xl"></i>
                                                            </div>
                                                            <span>{project.due_date}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto"></hr>
                                                <div className="flex align-items-center justify-content-between mb-2">
                                                    <h6 className="fw-bold mb-0">Progress</h6>
                                                    <div className={"flex align-items-center justify-content-center border-round p-2 " +
                                                        PROJECT_STATUS_CLASS_MAP[project.status]
                                                    }>
                                                        <span className="text-gray-900 text-sm">{PROJECT_STATUS_TEXT_MAP[project.status]}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Pagination links={projects.meta.links} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}