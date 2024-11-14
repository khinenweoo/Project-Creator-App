import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
  const { data, setData, post, errors, reset } = useForm({
    image: "",
    name: "",
    status: "",
    description: "",
    due_date: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    post(route("project.store"));
  };
  return (
    <Layout>
        <Head title="Project Create" />
        <div className='block-viewer'>
            <div className='block-section'>
                <div className='block-header'>
                    <div className="block-title">
                        <h4>Create Project</h4>
                    </div>
                </div>
                <div className='block-content'>
                    <div className="grid">
                        <div className="col-12">
                            <div className="max-w-7xl mx-auto">
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Layout>
);
}
