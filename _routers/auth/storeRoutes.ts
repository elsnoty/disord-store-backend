import express from "express";
import { createStoreController, deleteStoreController, getMyStoreController, updateStoreController } from "../../controllers/auth/storeControllers";
import { checkAssistantPermissions, hasAuthorization, restrict } from "../../controllers/auth/authController";
export const router = express.Router();

router.route("/").post(restrict("user"), createStoreController);
router.route("/:id").patch(restrict("storeOwner"), hasAuthorization, updateStoreController).delete(restrict("storeOwner"), hasAuthorization, deleteStoreController);

// router.use(restrict("storeOwner", "storeAssistant"), checkAssistantPermissions("previewStoreStats")); this doesn't have access to the /:id params
router.route("/:id").get(restrict("storeOwner", "storeAssistant"), hasAuthorization, checkAssistantPermissions("previewStoreStats"), getMyStoreController);
