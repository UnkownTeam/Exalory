export const GET = async () => {
  return Response.json(
    {
      statusCode: 200,
      success: true,
      message: "Sign out successfully",
    },
    {
      headers: {
        "Set-Cookie": "",
      },
    }
  );
};
