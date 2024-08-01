import httpService from "./httpService";

export const getAllVilla = async () => {
  try {
    const response = await httpService.get("/list");
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getVillaByid = async (id) => {
  try {
    const response = await httpService.get(`/list/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getReviewsOfVilla = async (id) => {
  try {
    const response = await httpService.get(
      `/review/getreviewbyidlist_id/${id}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getReviewsByid = async (id) => {
  try {
    const response = await httpService.get(`/review/getreviewbyid/${id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const addReview = async (id, values) => {
  try {
    const response = await httpService.post(
      `/review/createreview/${id}`,
      values
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const updateReview = async (id, values) => {
  try {
    const response = await httpService.put(`/review/updatebyid/${id}`, values);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteReview = async (id) => {
  try {
    const response = await httpService.delete(`/review/deletebyid/${id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const contactForm = async (values) => {
  try {
    const response = await httpService.post(`/contact`, values);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
