import Layout from "@/Layouts/layout/layout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import InputError from "../../Components/InputError";
import { Button } from "primereact/button";

export default function Edit({ auth, project }) {

    const projectData = project?.data || project || {};
    const projectId = project?.data.id || project.id;

    const statusOptions = [
        { name: 'pending', code: 'pending' },
        { name: 'in_progress', code: 'in_progress' },
        { name: 'completed', code: 'completed' },
    ];

    const initialStatusOption = statusOptions.find(s => s.code === projectData.status) || null;


    const { data, setData, post, errors } = useForm({
        image: null,
        image_path: projectData.image_path || null,
        name: projectData.name || "",
        status: initialStatusOption,
        description: projectData.description || "",
        due_date: projectData.due_date1 || "",
        _method: "PUT",
    });

    const statusHandler = (value) => {
        const updateStatusOption = statusOptions.find(s => s.code === value.code);
        setData("status", updateStatusOption);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const submitData = {
            ...data,
            update_status: data.status ? data.status.code : "",
        };

        post(route("project.update", projectId), {
            project: submitData,
        });
    };

    return (
        <Layout user={auth.data}>
            <Head title="Project Edit" />
            <div className="card">
                <section className="max-w-xl">
                    <header>
                        <h2 className="text-lg font-medium">Edit Project</h2>

                        <p className="mt-1 text-sm text-gray-600">
                            Edit your project "{projectData.name}".
                        </p>
                    </header>

                    <form onSubmit={onSubmit} className="mt-4 space-y-6">
                        <div className="p-fluid formgrid grid">
                            <div className="mb-3 col-12 md:col-12">
                                {data.image_path && (
                                    <div className="mb-4">
                                        <img src={data.image_path} alt="Project" className="w-12rem h-12rem border-round border-teal-600" />
                                    </div>
                                )}
                            </div>
                            <div className="mb-3 col-12 md:col-6">
                                <label htmlFor="image" className="block text-900 font-medium mb-2">Project Image</label>
                                <InputText
                                    id="project_image_path"
                                    type="file"
                                    name="image"
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData("image", e.target.files[0])}
                                />
                                <InputError message={errors.image} className="" />
                            </div>
                            <div className="mb-3 col-12 md:col-6">
                                <label htmlFor="email" className="block text-900 font-medium mb-2">Project Name</label>
                                <InputText
                                    id="project_name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                                <InputError message={errors.name} className="" />
                            </div>
                            <div className="mb-3 col-12 md:col-6">
                                <label htmlFor="status" className="block text-900 font-medium mb-2">Status</label>
                                <Dropdown
                                    id="status"
                                    name="status"
                                    value={data.status}
                                    onChange={(e) => statusHandler(e.value)}
                                    options={statusOptions}
                                    optionLabel="name"
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
                            <div className="mb-3 col-12">
                                <label htmlFor="project_description" className="block text-900 font-medium mb-2">Project Description</label>
                                <InputTextarea
                                    id="project_description"
                                    name="description"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    rows={4}
                                />
                                <InputError message={errors.description} className="mt-2" />
                            </div>
                            <div className="col-12 mt-4 text-right flex justify-content-end gap-3">
                                <Link
                                    href={route("projects.index")}
                                    className=""
                                >
                                    <Button label="Cancel" type="button" className="p-button-outlined mr-2" />
                                </Link>
                                <Button label="Update" type="submit" severity="info" className="w-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-600 active:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150" icon="pi pi-check" />
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </Layout>
    );
}
