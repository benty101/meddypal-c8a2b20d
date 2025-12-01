import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, FileText, Pill, Activity, Stethoscope, TestTube } from "lucide-react";
import { HealthTimelineService, type HealthTimelineEvent } from "@/services/HealthTimelineService";
import { useAuth } from "@/contexts/AuthContext";

const getEventIcon = (eventType: string) => {
    switch (eventType) {
        case 'consultation':
        case 'visit':
            return Stethoscope;
        case 'medication':
        case 'prescription':
            return Pill;
        case 'lab_test':
        case 'lab':
            return TestTube;
        case 'genomic_test':
            return Activity;
        default:
            return Calendar;
    }
};

const getEventColor = (eventType: string) => {
    switch (eventType) {
        case 'consultation':
        case 'visit':
            return "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400";
        case 'medication':
        case 'prescription':
            return "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400";
        case 'lab_test':
        case 'lab':
            return "bg-primary/10 dark:bg-primary/20 text-primary";
        case 'genomic_test':
            return "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400";
        default:
            return "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400";
    }
};

export const HealthTimelineWidget = () => {
    const { user } = useAuth();
    const [events, setEvents] = useState<HealthTimelineEvent[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            loadTimeline();
        } else {
            setLoading(false);
        }
    }, [user]);

    const loadTimeline = async () => {
        try {
            setLoading(true);
            const timelineEvents = await HealthTimelineService.getUserTimeline(user!.id);
            setEvents(timelineEvents.slice(0, 5)); // Show latest 5 events
        } catch (error) {
            console.error('Error loading timeline:', error);
            setEvents([]);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Loading timeline...</p>
            </div>
        );
    }

    if (events.length === 0) {
        return (
            <div className="text-center py-8">
                <Calendar className="h-12 w-12 text-slate-300 dark:text-slate-600 mx-auto mb-2" />
                <p className="text-slate-600 dark:text-slate-400">No health events yet</p>
                <p className="text-sm text-slate-500 dark:text-slate-500">Your health journey will appear here</p>
            </div>
        );
    }

    return (
        <div className="relative pl-8 border-l-2 border-slate-100 dark:border-slate-800 space-y-8">
            {events.map((event, index) => {
                const EventIcon = getEventIcon(event.event_type);
                const eventColor = getEventColor(event.event_type);
                const eventDate = new Date(event.event_date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                });

                return (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Timeline Dot */}
                        <div className={`absolute -left-[41px] top-0 h-5 w-5 rounded-full border-4 border-white dark:border-slate-900 shadow-sm ${eventColor.split(" ")[0]}`} />

                        {/* Card */}
                        <div className="group relative bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all cursor-pointer">
                            <div className="flex items-start gap-4">
                                <div className={`p-2 rounded-lg ${eventColor}`}>
                                    <EventIcon className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-slate-400 dark:text-slate-500 mb-1">{eventDate}</p>
                                    <h4 className="font-bold text-slate-900 dark:text-white">{event.event_title}</h4>
                                    {event.event_description && (
                                        <p className="text-sm text-slate-500 dark:text-slate-400">{event.event_description}</p>
                                    )}
                                </div>
                            </div>

                            {/* Hover Effect: View Details */}
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <FileText className="h-5 w-5 text-slate-300 dark:text-slate-600" />
                            </div>
                        </div>
                    </motion.div>
                );
            })}

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 text-sm font-medium text-primary bg-primary/10 dark:bg-primary/20 rounded-xl hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
            >
                View Full Timeline
            </motion.button>
        </div>
    );
};
