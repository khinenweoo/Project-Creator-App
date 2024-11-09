import { Head, Link, router } from "@inertiajs/react";
import Layout from "@/Layouts/layout/layout.jsx";
import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants";

export default function Index({ auth, tasks, queryParams = null }) {
    queryParams = queryParams || {};
    
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("task.index"), queryParams);
    };

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;

        searchFieldChanged(name, e.target.value);
    };

    return (
        <Layout>
            <Head title="Projects" />
            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <div
                            className="p-dataview p-component p-dataview-grid"
                            data-pc-name="dataview"
                            data-pc-section="root"
                        >
                            <div className="p-dataview-header" data-pc-section="header">
                                <div className="flex flex-column md:flex-row md:justify-content-between gap-2">
                                    <h4>Tasks</h4>
                                    <div className="flex justify-end gap-2">
                                        <div className="text-search">
                                            <span className="p-input-icon-left">
                                                <i className="pi pi-search"></i>
                                                <TextInput
                                                    className="p-inputtext p-component"
                                                    placeholder="Search by Name"
                                                    defaultValue={queryParams?.name}
                                                    onBlur={(e) =>
                                                        searchFieldChanged("name", e.target.value)
                                                    }
                                                    onKeyPress={(e) => onKeyPress("name", e)}
                                                />
                                            </span>
                                        </div>
                                        <div className="dropdown-wrapper max-w-sm mx-auto">
                                            <SelectInput
                                                className="border-round border-gray-300 block w-full h-full p-2"
                                                defaultValue={queryParams.status}
                                                onChange={(e) =>
                                                    searchFieldChanged("status", e.target.value)
                                                }
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
                                <div
                                    className="p-grid grid p-nogutter grid-nogutter"
                                    data-pc-section="grid"
                                >
                                    {tasks.data.map((task) => (
                                        <div className="col-12 lg:col-4" key={task.id}>
                                            <div className="card m-1 px-3">
                                                <div className="flex flex-wrap gap-2 align-items-center justify-content-between mb-2">
                                                    <div className="lesson_name w-7 h-6">
                                                        <h6 className="fw-bold hover:underline text-nowrap">
                                                            <Link
                                                                href={route("task.show", { task: task.id })}
                                                                className="text-gray-800"
                                                            >
                                                                {task.name}
                                                            </Link>
                                                        </h6>
                                                    </div>
                                                    <div
                                                        className="btn-group flex justify-end w-4"
                                                        role="group"
                                                        aria-label="Basic outlined example"
                                                    >
                                                        <Link href={route("task.edit", { task: task.id })}>
                                                            <button
                                                                type="button"
                                                                className="p-button p-component p-button-icon-only p-button-outlined p-button-success mr-2"
                                                                data-bs-toggle="modal"
                                                            >
                                                                <i className="pi pi-file-edit" />
                                                            </button>
                                                        </Link>

                                                        <Link
                                                            href={route("task.destroy", { task: task.id })}
                                                        >
                                                            <button
                                                                type="button"
                                                                className="p-button p-component p-button-icon-only p-button-outlined p-button-danger"
                                                                data-bs-toggle="modal"
                                                            >
                                                                <i className="pi pi-trash" />
                                                            </button>
                                                        </Link>
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
                                                            <span>3 Month</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid mt-2">
                                                    <div className="col-6">
                                                        <div className="flex align-items-center justify-between">
                                                            <div className="flex align-items-center justify-content-center border-round w-4 h-2">
                                                                <i className="pi pi-list text-xl"></i>
                                                            </div>
                                                            <span>0 Tasks</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="flex align-items-center justify-between">
                                                            <div className="flex align-items-center justify-content-center border-round w-4 h-2">
                                                                <i className="pi pi-flag-fill text-xl"></i>
                                                            </div>
                                                            <span>{task.due_date}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto"></hr>
                                                <div className="flex align-items-center justify-content-between mb-2">
                                                    <h6 className="fw-bold mb-0">Progress</h6>
                                                    <div
                                                        className={
                                                            "flex align-items-center justify-content-center border-round p-2 " +
                                                            TASK_STATUS_CLASS_MAP[task.status]
                                                        }
                                                    >
                                                        <span className="text-gray-900 text-sm">
                                                            {TASK_STATUS_TEXT_MAP[task.status]}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Pagination links={tasks.meta.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
