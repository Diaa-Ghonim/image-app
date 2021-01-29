function handleHttpError(error) {
  console.log(error.toJSON());
  console.log(error.response);
  if (error.response) {
    return {
      msg: error.response.data.errors[0],
      statusCode: error.response.statusCode,
    };
  }
  return { msg: 'Something went wrong !!' };
}

export { handleHttpError };
