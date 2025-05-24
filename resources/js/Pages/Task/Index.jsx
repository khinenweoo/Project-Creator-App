import { Head, Link, router } from "@inertiajs/react";
import Layout from "@/Layouts/layout/layout.jsx";
import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import { TASK_PRIORITY_CLASS_MAP, TASK_PRIORITY_TEXT_MAP, TASK_STATUS_BORDER_MAP } from "@/constants";
import Checkbox from "@/Components/Checkbox";
import '../../../css/project.css';
import { Button } from "primereact/button";

export default function Index({ user, tasks, queryParams = null, success }) {
    queryParams = queryParams || {};

    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("task.index"), queryParams);
    };

    const taskCheckBoxChange = (taskId, e) => {
        if (!window.confirm('Do you want to complete the task?')) {
            retrun;
        }
        const isChecked = e.target.checked;

        // send request to update the task status
        router.put(route("task.complete", { taskId }), { completed: isChecked });
    }

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;

        searchFieldChanged(name, e.target.value);
    };

    const deleteTask = (task) => {
        if (!window.confirm('Are you sure you want to delete the task?')) {
            return;
        }
        router.delete(route('task.destroy', task.id));
    }

    return (
        <Layout user={user.data}>
            <Head title="Projects" />
            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <div className="flex flex-row justify-content-between border-bottom-1 surface-border pb-4">
                            <div>
                                <div className="font-medium text-3xl text-900">Tasks</div>
                            </div>
                            <div className="flex md:justify-content-end align-items-center lg:mt-0">
                                    <Link href={route('task.create')} >
                                            <Button label="Create Task" type="button" className="p-button-outlined mr-2" icon="pi pi-plus-circle" />
                                    </Link>
                            </div>
                        </div>
                       {success && (<div className="bg-teal-500 py-2 px-4 text-white border-teal-600 border-round mb-4">
                            <span>{success}</span>
                        </div>)}
                        <div
                            className="p-dataview p-component p-dataview-grid"
                            data-pc-name="dataview"
                            data-pc-section="root"
                        >
                            <div className="p-dataview-header bg-white border-none p-0 mb-6" data-pc-section="header">
                                <div className="mt-5 mb-3 w-full">
                                    <div className="flex flex-row justify-content-start flex-wrap gap-2 mb-2">
                              
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
                                  
                                        <div className="dropdown-wrapper">
                                            <SelectInput
                                                className="border-round border-gray-300 block w-full h-full p-2"
                                                defaultValue={queryParams.priority}
                                                onChange={(e) =>
                                                    searchFieldChanged("priority", e.target.value)
                                                }
                                            >
                                                <option value="">Select Priority</option>
                                                <option value="highest">Highest</option>
                                                <option value="medium">Medium</option>
                                                <option value="low">Low</option>
                                                 <option value="lowest">Lowest</option>
                                            </SelectInput>
                                        </div>
                                        <div className="dropdown-wrapper">
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
                                                            <h6 className="font-medium text-600 text-wrap mb-0">
                                                                {task.name}
                                                            </h6>
                                                        </div>
                                                        <div className="flex align-items-center justify-content-center">
                                                            <div className="status-checkbox w-2rem h-2rem mr-1">
                                                                <label className="container">
                                                                <Checkbox 
                                                                type="checkbox" 
                                                                checked={task.status === "completed"}
                                                                onChange={(e) => {taskCheckBoxChange(task.id, e)}}
                                                                />
                                                                <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="grid px-3 py-2">
                                                        <div className="col-6">
                                                            <div className="flex align-items-center justify-between">
                                                                <div className="flex align-items-center justify-content-center border-round w-3 h-2">
                                                                    <i className="pi pi-flag-fill text-sm mr-2"></i>
                                                                </div>
                                                                <span className="text-sm">{task.due_date} </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="flex align-items-center justify-between">
                                                                <div className="flex align-items-center justify-content-center border-round w-3 h-2">
                                                                    <i className="pi pi-calendar-times text-sm mr-2"></i>
                                                                </div>
                                                                <span className="text-sm">{task.duration}</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="flex align-items-center justify-between">
                                                                <div className="flex align-items-center justify-content-center border-round w-3 h-2">
                                                                    <i className="pi pi-user text-sm mr-2"></i>
                                                                </div>
                                                                <span className="text-sm">{task.assignedUser.name}</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="flex align-items-center px-2">
                                                                <span className="text-md text-indigo-500 border-round-xl bg-purple-50">
                                                                    <i className="pi pi-briefcase text-sm mr-2"></i>
                                                                    <Link
                                                                    href={route("project.show", { project: task.project.id })}
                                                                    className="text-bluegray-500"
                                                                    >{task.project.name}
                                                                    </Link>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* bottom */}

                                                    <div className="flex align-items-center justify-content-between px-3 mb-3">
                                                        <div
                                                            className={
                                                                "flex align-items-center justify-content-center border-round p-2 mr-2 " +
                                                                TASK_PRIORITY_CLASS_MAP[task.priority]
                                                            }
                                                        >
                                                            <span className="text-white text-sm">
                                                                {TASK_PRIORITY_TEXT_MAP[task.priority]}
                                                            </span>

                                                        </div>

                                                        <div className="action-group">
                                                            <Link href={route('task.edit', {task: task.id})} >
                                                                <button type="button" className="p-button p-component p-button-icon-only p-button-outlined p-button-success mr-2">
                                                                    <i className="pi pi-file-edit" />
                                                                </button>
                                                            </Link>
                                                            <button 
                                                                type="button"
                                                                onClick={e => deleteTask(task)}
                                                                className="p-button p-component p-button-icon-only p-button-outlined p-button-danger"
                                                            >
                                                                <i className="pi pi-trash" />
                                                            </button>
                                                        </div>
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
