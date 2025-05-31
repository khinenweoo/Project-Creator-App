import Layout from "@/Layouts/layout/layout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import InputError from "../../Components/InputError";
import { Button } from "primereact/button";

export default function Create({ auth, projects, users, assigned_user }) {

    const { data, setData, post, errors, reset } = useForm({
        name: "",
        image: "",
        status: "",
        priority: "",
        due_date: "",
        description: "",
        project_id: "",
        assigned_user_id: assigned_user ? assigned_user.id : "",
    });


    const projectOptions = projects.data.map(project => ({
        id: project.id,
        name: project.name,
    }));

    const statusOptions = [
        { name: 'pending', code: 'pending' },
        { name: 'in_progress', code: 'in_progress' },
        { name: 'completed', code: 'completed' },
    ];
    const PriorityOptions = [
        { name: 'Highest', code: 'highest' },
        { name: 'Medium', code: 'medium' },
        { name: 'Low', code: 'low' },
        { name: 'Lowest', code: 'lowest' },
    ];

    const assignUserOptions = users.length > 0
    ? users.data.map(user => ({
        id: user.id,
        name: user.name,
    }))
    : [{
        id: assigned_user.id,
        name: assigned_user.name,
    }];


    const setProject = (value) => {
        setData("project_id", value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("task.store"));
    };


    return (
        <Layout user={auth.data}>
            <Head title="Create" />
            <div className="card">
                <section className="max-w-xl">
                    <header>
                        <h2 className="text-lg font-medium">Create New Task</h2>
                    </header>

                    <form onSubmit={onSubmit} className="mt-4 space-y-6">
                        <div className="p-fluid formgrid grid">
                            <div className="mb-3 col-12 md:col-6">
                                <label htmlFor="image" className="block text-900 font-medium mb-2">Task Image</label>
                                <InputText
                                    id="task_image_path"
                                    type="file"
                                    name="image"
                                    className=" block w-full"
                                    onChange={(e) => setData("image", e.target.files[0])}
                                />
                                <InputError message={errors.image} className="" />
                            </div>
                            <div className="mb-3 col-12 md:col-6">
                                <label htmlFor="email" className="block text-900 font-medium mb-2">Task Name</label>
                                <InputText
                                    id="task_name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                                <InputError message={errors.name} className="" />
                            </div>
                            <div className="mb-3 col-12 md:col-12">
                                <label htmlFor="project" className="block text-900 font-medium mb-2">Project</label>
                                <Dropdown
                                    id="project"
                                    name="project_id"
                                    optionLabel="name"
                                    optionValue="id"
                                    value={data.project_id}
                                    options={projectOptions}
                                    onChange={(e) => setProject(e.value)}
                                    placeholder="Select Project"
                                />
                                <InputError message={errors.project_id} className="" />
                            </div>
                            <div className="mb-3 col-12 md:col-6">
                                <label htmlFor="status" className="block text-900 font-medium mb-2">Status</label>
                                <Dropdown
                                    id="status"
                                    name="status"
                                    optionLabel="name"
                                    optionValue="code"
                                    value={data.status}
                                    options={statusOptions}
                                    onChange={(e) => setData('status', e.value)}
                                    placeholder="Select Status"
                                />
                                <InputError message={errors.status} className="" />
                            </div>
                            <div className="mb-3 col-12 md:col-6">
                                <label htmlFor="due_date" className="block text-900 font-medium mb-2">Due Date</label>
                                <InputText
                                    id="due_date"
                                    type="date"
                                    name="due_date"
                                    value={data.due_date}
                                    onChange={(e) => setData("due_date", e.target.value)}
                                />
                                <InputError message={errors.due_date} className="" />
                            </div>
                            <div className="mb-3 col-12 md:col-6">
                                <label htmlFor="priority" className="block text-900 font-medium mb-2">Priority</label>
                                <Dropdown
                                    id="priority"
                                    name="priority"
                                    optionLabel="name"
                                    optionValue="code"
                                    value={data.priority}
                                    onChange={(e) => setData('priority', e.value)}
                                    options={PriorityOptions}
                                    placeholder="Select Priority"
                                />
                                <InputError message={errors.priority} className="" />
                            </div>
                            <div className="mb-3 col-12 md:col-6">
                                <label htmlFor="priority" className="block text-900 font-medium mb-2">Task Assign User</label>
                                <Dropdown
                                    id="assign_user"
                                    name="assigned_user_id"
                                    optionLabel="name"
                                    optionValue="id"
                                    value={data.assigned_user_id}
                                    options={assignUserOptions}
                                    onChange={(e) => setData('assigned_user_id', e.value)}
                                    placeholder="Select Task Assign Person"
                                />
                                <InputError message={errors.assigned_user_id} className="" />
                            </div>
                            <div className="mb-3 col-12">
                                <label htmlFor="task_description" className="block text-900 font-medium mb-2">Description</label>
                                <InputTextarea
                                    id="task_description"
                                    name="description"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    rows={4}
                                />
                                <InputError message={errors.description} className="" />
                            </div>
                            <div className="col-12 mt-4 text-right flex justify-content-end gap-3">
                                <Link
                                    href={route("task.index")}
                                    className=""
                                >
                                    <Button label="Cancel" type="button" className="p-button-outlined mr-2" />
                                </Link>
                                <Button label="Create" type="submit" severity="info" className="w-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-600 active:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150" icon="pi pi-check" />
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </Layout>
    );
}
