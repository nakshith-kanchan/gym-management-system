import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Heading, Subscription, Loader } from '../../components';
import { userImg } from "../../images";
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../utils/fetchData';
import { toast } from 'react-hot-toast';

const SubscriberList = () => {
  const [subscriber, setSubscriber] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [subId, setSubId] = useState(null);

  const getAllSubscribers = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/api/v1/subscription/getall-subscription`);
      if (res.data && res.data.success) {
        setSubscriber(res.data.subscriptions);
      }
      setLoading(false); 
    } catch (err) {
      console.log(err);
      setLoading(false); 
    }
  };

  useEffect(() => {
    getAllSubscribers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const confirm = window.confirm("Are you sure you want to delete this subscriber?");
      if (!confirm) return;

      const { data } = await axios.delete(`${BASE_URL}/api/v1/subscription/delete-subscription/${id}`);
      if (data?.success) {
        toast.success("Subscriber deleted successfully!");
        // Remove subscriber from UI without reloading
        setSubscriber(prev => prev.filter(s => s._id !== id));
      } else {
        toast.error(data?.message || "Failed to delete subscriber.");
      }
    } catch (error) {
      console.error("Error deleting subscriber:", error);
      toast.error("An error occurred while deleting.");
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <section className='pt-10 bg-gray-900 min-h-screen'>
      <Heading name="Subscriber List" />
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {subscriber.map((s, i) => (
            <Subscription
              key={i}
              userImg={userImg}
              userName={s.userName}
              planName={s.plan.planName}
              planAmount={s.planAmount}
              planType={s.planType}
              createdAt={s.createdAt}
              planid={s.planId}
              subId={s._id}
              handleDelete={() => handleDelete(s._id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriberList;
