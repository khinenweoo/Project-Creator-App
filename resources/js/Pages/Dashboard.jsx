import {Button} from 'primereact/button';
import {Chart} from 'primereact/chart';
import {Menu} from 'primereact/menu';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {LayoutContext} from '@/Layouts/layout/context/layoutcontext';
import Layout from "@/Layouts/layout/layout.jsx";
import DashboardInfoCard from "@/Components/DashboardInfoCard.jsx";
import { addDays } from 'date-fns';
import { Chart as ChartJS, TimeScale, CategoryScale, LinearScale, BarElement, Legend, Tooltip } from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(
    TimeScale,
    CategoryScale,
    LinearScale,
    BarElement,
    Legend,
    Tooltip
);

const Dashboard = ({ user, total_projects, total_tasks }) => {
    const menu1 = useRef(null);
    const menu2 = useRef(null);
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color') || '#495057';
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary') || '#6c757d';
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border') || '#dfe7ef';
    const [data, setChartData] = useState({});
    const [options, setOptions] = useState({});
    const {layoutConfig} = useContext(LayoutContext);


    useEffect(() => {

        // Convert string dates to actual Date objects in your data
        const barData = {
            labels: ['Development', 'Prototyping', 'Infography', 'Mobile App', 'Design'],
            datasets: [
                {
                    label: 'Justin',
                    backgroundColor: '#4F46E5', // dark blue/indigo
                    data: [
                        { x: new Date('2024-03-03'), y: 'Development', duration: 2 },
                        { x: new Date('2024-03-11'), y: 'Prototyping', duration: 1 },
                        { x: new Date('2024-03-07'), y: 'Infography', duration: 2 },
                        { x: new Date('2024-03-05'), y: 'Mobile App', duration: 2 },
                        { x: new Date('2024-03-03'), y: 'Design', duration: 2 }
                    ]
                },
                {
                    label: 'Michael',
                    backgroundColor: '#F97316', // orange
                    data: [
                        { x: new Date('2024-03-03'), y: 'Development', duration: 1 },
                        { x: new Date('2024-03-10'), y: 'Prototyping', duration: 1 },
                        { x: new Date('2024-03-08'), y: 'Infography', duration: 2 },
                        { x: new Date('2024-03-06'), y: 'Mobile App', duration: 3 },
                        { x: new Date('2024-03-04'), y: 'Design', duration: 1 }
                    ]
                },
                {
                    label: 'Jason',
                    backgroundColor: '#7DD3FC', // light blue
                    data: [
                        { x: new Date('2024-03-04'), y: 'Development', duration: 2 },
                        { x: new Date('2024-03-12'), y: 'Prototyping', duration: 4 },
                        { x: new Date('2024-03-07'), y: 'Infography', duration: 2 },
                        { x: new Date('2024-03-07'), y: 'Mobile App', duration: 4 },
                        { x: new Date('2024-03-05'), y: 'Design', duration: 2 }
                    ]
                }
            ]
        };

        const barOptions = {
            indexAxis: 'y',
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    },
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day',
                        displayFormats: {
                            day: 'dd MMM'
                        }
                    },
                    min: new Date('2024-03-01'),
                    max: new Date('2024-03-18'),
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        display: false
                    }
                }
            }
        };

        setChartData({barData});
        setOptions({barOptions});
    }, [layoutConfig]);



    return (
        <Layout user={user.data}>
            <div className="grid">
                <DashboardInfoCard title="Total Tasks"
                                   value={total_tasks}
                                   icon="check-circle"
                                   iconColor="blue"
                >
                </DashboardInfoCard>
                <DashboardInfoCard title="Total Projects" 
                                    value={total_projects}
                                   icon="briefcase"
                                   iconColor="purple"
                >
                </DashboardInfoCard>
                <DashboardInfoCard title="Progress Projects"
                                   value="74"
                                   icon="sort-amount-up"
                                   iconColor="orange"
                >
                </DashboardInfoCard>
                <DashboardInfoCard title="Completed Projects" value="122"
                                   icon="inbox"
                                   iconColor="cyan"
                >
                </DashboardInfoCard>

                <div className="col-12 xl:col-6">
                    <div className="card">
                        <h5>Project Timeline</h5>
                        <Chart type="bar" data={data.barData} options={options.barOptions} style={{ height: '400px' }}></Chart>
                    </div>
                </div>

                <div className="col-12 xl:col-6">
                    <div className="card">
                        <div className="flex justify-content-between align-items-center mb-5">
                            <h5>Tasks for today</h5>
                            <div>
                                <Button type="button" icon="pi pi-ellipsis-v" rounded text className="p-button-plain"
                                        onClick={(event) => menu1.current?.toggle(event)}/>
                                <Menu
                                    ref={menu1}
                                    popup
                                    model={[
                                        {label: 'Add New', icon: 'pi pi-fw pi-plus'},
                                        {label: 'Remove', icon: 'pi pi-fw pi-minus'}
                                    ]}
                                />
                            </div>
                        </div>
                        <ul className="list-none p-0 m-0">
                            <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                <div>
                                    <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Mobile App</span>
                                    <div className="mt-1 text-600">Prepare Figma File</div>
                                </div>
                                <div className="mt-2 md:mt-0 flex align-items-center">
                                    <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                         style={{height: '8px'}}>
                                        <div className="bg-orange-500 h-full" style={{width: '50%'}}/>
                                    </div>
                                    <span className="text-orange-500 ml-3 font-medium">%50</span>
                                </div>
                            </li>
                            <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                <div>
                                    <span className="text-900 font-medium mr-2 mb-1 md:mb-0">UX Wireframes</span>
                                    <div className="mt-1 text-600">Design ux Wireframes</div>
                                </div>
                                <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                    <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                         style={{height: '8px'}}>
                                        <div className="bg-cyan-500 h-full" style={{width: '16%'}}/>
                                    </div>
                                    <span className="text-cyan-500 ml-3 font-medium">%16</span>
                                </div>
                            </li>
                            <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                <div>
                                    <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Backend Development</span>
                                    <div className="mt-1 text-600">Research</div>
                                </div>
                                <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                    <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                         style={{height: '8px'}}>
                                        <div className="bg-pink-500 h-full" style={{width: '67%'}}/>
                                    </div>
                                    <span className="text-pink-500 ml-3 font-medium">%67</span>
                                </div>
                            </li>
                            <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                <div>
                                    <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Brand UI Kit</span>
                                    <div className="mt-1 text-600">Prototype UI</div>
                                </div>
                                <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                    <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                         style={{height: '8px'}}>
                                        <div className="bg-green-500 h-full" style={{width: '35%'}}/>
                                    </div>
                                    <span className="text-green-500 ml-3 font-medium">%35</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;

