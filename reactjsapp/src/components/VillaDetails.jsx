import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getReviewsByid,
  getReviewsOfVilla,
  getVillaByid,
  deleteReview,
} from "../utils/apiSerice";
import { FaEdit, FaTrash } from "react-icons/fa";
import VillaCard from "./VillaCard";
import EditModal from "./EditModal";
import { toast } from "react-toastify";
import ReviewForm from "./ReviewForm";


const VillaDetails = () => {
  const [villadls, setVilladls] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState([]);
  const { list_id } = useParams();

  const getvillaDetails = async () => {
    const response = await getVillaByid(list_id);
    setVilladls(response.result[0]);
  };

  const deleteReviewdate = async (id) => {
    const response = await deleteReview(id);
    await fetchallreviews(list_id); // Refresh reviews after deletion
    if (response.success === true) {
      toast.success("Review deleted successfully");
    } else {
      toast.error("Somthing went wrong");
    }
  };

  const fetchallreviews = async (id) => {
    const response = await getReviewsOfVilla(id);
    setReviews(response.result);
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const reviewid = async (ele) => {
    setEditModalIsOpen(!editModalIsOpen);
    const response = await getReviewsByid(ele.id);
    setReview(response.result[0]);
  };

  useEffect(() => {
    getvillaDetails();
    fetchallreviews(list_id);
  }, [list_id]);

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <div className="flex flex-col items-center gap-10">
        <div className="w-full md:w-1/2">
          {villadls && (
            <VillaCard
              id={villadls.id}
              name={villadls.title}
              image={villadls.image}
              description={villadls.description}
              price={villadls.price}
              rating={villadls.rating}
              className="mb-8 border rounded-lg shadow-lg"
            />
          )}
        </div>
        <div className="w-full md:w-1/2">
          <h1
            onClick={handleModal}
            className="text-2xl font-bold mb-4 cursor-pointer"
          >
            Add Reviews
          </h1>

          {modalIsOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
              <ReviewForm setModalIsOpen={setModalIsOpen} fetchallreviews={fetchallreviews} />
            </div>
          )}
        </div>

        <div className="w-full md:w-4/5">
          <h1 className="text-2xl font-bold mb-4">Reviews</h1>
          {editModalIsOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
              <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
                <EditModal
                  setEditModalIsOpen={setEditModalIsOpen}
                  fetchallreviews={fetchallreviews}
                  review={review}
                />
              </div>
            </div>
          )}

          <div className="mt-4 space-y-4">
            {reviews.map((ele, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg shadow-sm flex justify-between items-center"
              >
                <div>
                  <h1 className="text-lg font-semibold mb-1">
                    {ele.review.charAt(0).toUpperCase() + ele.review.slice(1)}
                  </h1>
                  <p className="text-sm text-gray-500 mb-1">
                    Rating: {ele.rating}
                  </p>
                  <p className="text-sm text-gray-500">
                    Villa ID: {ele.list_id}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => reviewid(ele)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaEdit size={20} />
                  </button>
                  <button
                    onClick={() => deleteReviewdate(ele.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillaDetails;
