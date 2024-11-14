import { Head, Link, router } from "@inertiajs/react";
import Layout from "@/Layouts/layout/layout.jsx";
import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import { TASK_PRIORITY_CLASS_MAP, TASK_PRIORITY_TEXT_MAP, TASK_STATUS_BORDER_MAP, TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants";
import Checkbox from "@/Components/Checkbox";
import '../../../css/project.css';
import { Button } from "primereact/button";

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

    const taskCheckBoxChange = (e) => {
        let value = e.target.value;
        console.log(value);
    }

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
                            <div className="p-dataview-header bg-white border-none" data-pc-section="header">
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
                            <div className="dataview-content">
                                <div
                                    className="grid"
                                    data-pc-section="grid"
                                >
                                    {tasks.data.map((task) => (
                                        <div className="col-12 md:col-6 lg:col-4" key={task.id}>
                                            <div className="surface-0 shadow-3 ">
                                            <div className={
                                                "border-bottom-2 w-full h-full surface-overlay " +
                                                TASK_STATUS_BORDER_MAP[task.status]  
                                            }>
                                                    <div className="flex justify-content-between p-3">
                                                        <div className="mt-2 w-full pr-2">
                                                            <h6 className="font-medium text-600 hover:underline text-wrap">
                                                                <Link
                                                                    href={route("task.show", { task: task.id })}
                                                                    className="text-gray-900"
                                                                >
                                                                    {task.name}
                                                                </Link>
                                                            </h6>
                                                        </div>
                                                        <div className="flex align-items-center justify-content-center">
                                                            <div className="status-checkbox w-2rem h-2rem mr-1">
                                                                <label className="container">
                                                                <Checkbox 
                                                                type="checkbox" 
                                                                checked={task.status === "completed"}
                                                                onChange={(e) => {taskCheckBoxChange(e)}}
                                                                />
                                                                <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* */}
                                                    <div className="grid p-3">
                                                        <div className="col-4">
                                                            <div className="flex align-items-center justify-between">
                                                                <div className="flex align-items-center justify-content-center border-round w-3 h-2">
                                                                    <i className="pi pi-flag-fill text-sm mr-2"></i>
                                                                </div>
                                                                <span className="text-sm">{task.due_date} </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="flex align-items-center justify-between">
                                                                <div className="flex align-items-center justify-content-center border-round w-3 h-2">
                                                                    <i className="pi pi-calendar-times text-sm mr-2"></i>
                                                                </div>
                                                                <span className="text-sm">{task.duration}</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="flex align-items-center justify-between">
                                                                <div className="flex align-items-center justify-content-center border-round w-3 h-2">
                                                                    <i className="pi pi-user text-sm mr-2"></i>
                                                                </div>
                                                                <span className="text-sm">{task.assignedUser.name}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* bottom */}
                                                    <div className="flex align-items-center justify-content-end px-3 mb-3">
                                                        <div
                                                            className={
                                                                "flex align-items-center justify-content-center border-round p-1 mr-2 " +
                                                                TASK_PRIORITY_CLASS_MAP[task.priority]
                                                            }
                                                        >
                                                            <span className="text-white text-sm">
                                                                {TASK_PRIORITY_TEXT_MAP[task.priority]}
                                                            </span>

                                                        </div>
                                                        <Link href={route('task.edit', {task: task.id})} >
                                                            <Button type="button" className="p-button p-component p-button-icon-only p-button-outlined bg-blue-100 w-2rem h-2rem text-blue-500" icon="pi pi-pencil" />
                                                        </Link>
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
