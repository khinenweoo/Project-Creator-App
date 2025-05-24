import Layout from "@/Layouts/layout/layout";
import { Head, Link, useForm } from "@inertiajs/react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import InputError from "../../Components/InputError";
import { Button } from "primereact/button";

export default function Edit({ user }) {

    const userData = user?.data || user || {};
    const { data, setData, post, errors, reset } = useForm({
        name: userData.name || '',
        email: userData.email || '',
        username: userData.username || '',
        joined_date: userData.joined_date || '',
        phone_number: userData.phone_number || '',
        profile_image: userData.profile_image || '',
        new_profile: null,
        company: userData.company || '',
        occupation: userData.occupation || '',
        department: userData.department || '',
        description: userData.description || '',
    });

    const status = [
        { name: 'pending', code: 'pending' },
        { name: 'in_progress', code: 'in_progress' },
        { name: 'completed', code: 'completed' },
    ];


    const onSubmit = (e) => {
        e.preventDefault();

        console.log("Entry Data: ", data);

        post(route("user.update"));
    };
    return (
        <Layout>
            <Head title="User Edit" />
            <div className="card">
                <section className="max-w-xl">
                    <header>
                        <h2 className="text-lg font-medium">Edit Member "{userData.name}"</h2>
                    </header>

                    <form onSubmit={onSubmit} className="mt-4 space-y-6">
                        <div className="p-fluid formgrid grid">
                            <div className="mb-3 col-12 md:col-12">
                                {data.profile_image && (
                                    <div className="profile text-center">
                                        <div className="img-thumbnail mb-1 rounded-md shadow-md">
                                            <img
                                                src={data.profile_image}
                                                alt=""
                                                className="avatar w-auto h-16"
                                            />

                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="mb-3 col-12 md:col-6">
                                <label htmlFor="profile" className="block text-900 font-medium mb-2">Profile Image</label>
                                <InputText
                                    id="profile"
                                    type="file"
                                    name="profile_image"
                                    className="block w-full"
                                    onChange={(e) => setData("profile_image", e.target.files[0])}
                                />
                                <InputError message={errors.profile_image} className="" />
                            </div>
                            <div className="mb-3 col-12 md:col-6">
                                <label htmlFor="email" className="block text-900 font-medium mb-2">Name</label>
                                <InputText
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                                <InputError message={errors.name} className="" />
                            </div>
                            <div className="mb-3 col-12 md:col-12">
                                <label htmlFor="company" className="block text-900 font-medium mb-2">Company</label>
                                <InputText
                                    id="company"
                                    type="text"
                                    name="company"
                                    value={data.company}
                                    onChange={(e) => setData('company', e.target.value)}
                                />
                                <InputError message={errors.company} className="" />
                            </div>
                            <div className="mb-3 col-12 md:col-6">
                                <label htmlFor="department" className="block text-900 font-medium mb-2">Department</label>
                                <InputText
                                    id="department"
                                    type="text"
                                    name="department"
                                    value={data.department}
                                    onChange={(e) => setData('department', e.target.value)}
                                />
                                <InputError message={errors.department} className="" />
                            </div>
                            <div className="mb-3 col-12 md:col-6">
                                <label htmlFor="joined_date" className="block text-900 font-medium mb-2">Joining Date</label>
                                <InputText
                                    id="joined_date"
                                    type="date"
                                    name="joined_date"
                                    value={data.joined_date}
                                    onChange={(e) => setData('joined_date', e.target.value)}
                                />
                                <InputError message={errors.joined_date} className="" />
                            </div>
                            <div className="mb-3 col-12 md:col-6">
                                <label htmlFor="user_name" className="block text-900 font-medium mb-2">User Name</label>
                                <InputText
                                    id="username"
                                    type="text"
                                    name="username"
                                    value={data.username}
                                    onChange={(e) => setData('username', e.target.value)}
                                />
                                <InputError message={errors.username} className="" />
                            </div>
                            <div className="mb-3 col-12 md:col-6">
                                <label htmlFor="user_email" className="block text-900 font-medium mb-2">User Email</label>
                                <InputText
                                    id="user_email"
                                    type="text"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                <InputError message={errors.email} className="" />
                            </div>
                            
                            <div className="mb-3 col-12 md:col-6">
                                <label htmlFor="phone" className="block text-900 font-medium mb-2">Phone</label>
                                <InputText
                                    id="phone"
                                    type="text"
                                    name="phone_number"
                                    value={data.phone_number}
                                    onChange={(e) => setData('phone_number', e.target.value)}
                                />
                                <InputError message={errors.phone_number} className="" />
                            </div>
                            <div className="mb-3 col-12 md:col-6">
                                <label htmlFor="occupation" className="block text-900 font-medium mb-2">Occupation</label>
                                <InputText
                                    id="occupation"
                                    type="text"
                                    name="occupation"
                                    value={data.occupation}
                                    onChange={(e) => setData('occupation', e.target.value)}
                                />
                                <InputError message={errors.occupation} className="" />
                            </div>
                            <div className="mb-3 col-12">
                                <label htmlFor="description" className="block text-900 font-medium mb-2">Description</label>
                                <InputTextarea
                                    id="description"
                                    name="description"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    rows={4}
                                />
                                <InputError message={errors.description} className="mt-2" />
                            </div>
                            <div className="col-12 mt-4 text-right flex justify-content-end gap-3">
                                <Link
                                    href={route("user.index")}
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
