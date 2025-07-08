import { Router } from "express";
const router = Router() // Setting-up the router

/** SingOn & Authentication **/
router.post("/auth/register", (req, res) => {
    console.log(req.body);
});

export default router;  // Exporting the Router