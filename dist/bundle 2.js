/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controllers/UserController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/UserController.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst User_ts_1 = __importDefault(__webpack_require__(/*! ../models/User.ts */ \"./src/models/User.ts\"));\nclass UserController {\n    createUser(req, res) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const { username, email, password, role } = req.body;\n                const newUser = new User_ts_1.default({\n                    username,\n                    email,\n                    password,\n                    role\n                });\n                yield newUser.save();\n                return res.status(201).json(newUser);\n            }\n            catch (error) {\n                return res.status(500).json({ message: 'Error creating the user', error });\n            }\n        });\n    }\n    getAllUsers(req, res) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const users = yield User_ts_1.default.find();\n                return res.status(200).json(users);\n            }\n            catch (error) {\n                return res.status(500).json({ message: 'Error retrieving users', error });\n            }\n        });\n    }\n    getUserById(req, res) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const user = yield User_ts_1.default.findById(req.params.id);\n                if (!user) {\n                    return res.status(404).json({ message: 'User not found' });\n                }\n                return res.status(200).json(user);\n            }\n            catch (error) {\n                return res.status(500).json({ message: 'Error finding the user', error });\n            }\n        });\n    }\n    updateUser(req, res) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const { username, email, role } = req.body;\n                const user = yield User_ts_1.default.findByIdAndUpdate(req.params.id, {\n                    username,\n                    email,\n                    role\n                }, { new: true });\n                if (!user) {\n                    return res.status(404).json({ message: 'User not found' });\n                }\n                return res.status(200).json(user);\n            }\n            catch (error) {\n                return res.status(500).json({ message: 'Error updating the user', error });\n            }\n        });\n    }\n    deleteUser(req, res) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const user = yield User_ts_1.default.findByIdAndDelete(req.params.id);\n                if (!user) {\n                    return res.status(404).json({ message: 'User not found' });\n                }\n                return res.status(200).json({ message: 'User deleted successfully' });\n            }\n            catch (error) {\n                return res.status(500).json({ message: 'Error deleting the user', error });\n            }\n        });\n    }\n}\nexports[\"default\"] = new UserController();\n\n\n//# sourceURL=webpack://tstemplate/./src/controllers/UserController.ts?");

/***/ }),

/***/ "./src/interfaces/UserInterface.ts":
/*!*****************************************!*\
  !*** ./src/interfaces/UserInterface.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UserRole = void 0;\nvar UserRole;\n(function (UserRole) {\n    UserRole[\"Admin\"] = \"admin\";\n    UserRole[\"User\"] = \"user\";\n    UserRole[\"Guest\"] = \"guest\";\n})(UserRole || (exports.UserRole = UserRole = {}));\n\n\n//# sourceURL=webpack://tstemplate/./src/interfaces/UserInterface.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\nconst userRoutes_ts_1 = __importDefault(__webpack_require__(/*! ./routes/userRoutes.ts */ \"./src/routes/userRoutes.ts\"));\ndotenv_1.default.config();\nconst app = (0, express_1.default)();\nconst port = 3000;\nconst dataBaseUrl = \"mongodb://localhost:27017/APICustomers-mspr\" || 0;\napp.use('/api', userRoutes_ts_1.default);\napp.get('/', (req, res) => {\n    res.send('API customer service is running');\n});\n(0, mongoose_1.connect)(dataBaseUrl).then(() => {\n    console.log('Connected to MongoDB');\n    app.listen(port, () => {\n        console.log(`App listening on port ${port}`);\n    });\n}).catch((err) => {\n    console.error(err);\n});\n\n\n//# sourceURL=webpack://tstemplate/./src/main.ts?");

/***/ }),

/***/ "./src/middlewares/authMiddleware.ts":
/*!*******************************************!*\
  !*** ./src/middlewares/authMiddleware.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.hashPassword = void 0;\nconst bcrypt_1 = __importDefault(__webpack_require__(/*! bcrypt */ \"bcrypt\"));\n//le middleware pour hasher le mot de passe\nfunction hashPassword(next, user) {\n    return __awaiter(this, void 0, void 0, function* () {\n        if (user.isModified('password') || user.isNew) {\n            user.password = yield bcrypt_1.default.hash(user.password, 10);\n        }\n        next();\n    });\n}\nexports.hashPassword = hashPassword;\n\n\n//# sourceURL=webpack://tstemplate/./src/middlewares/authMiddleware.ts?");

/***/ }),

/***/ "./src/models/User.ts":
/*!****************************!*\
  !*** ./src/models/User.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst bcrypt_1 = __importDefault(__webpack_require__(/*! bcrypt */ \"bcrypt\"));\nconst UserInterface_ts_1 = __webpack_require__(/*! ../interfaces/UserInterface.ts */ \"./src/interfaces/UserInterface.ts\");\nconst authMiddleware_ts_1 = __webpack_require__(/*! ../middlewares/authMiddleware.ts */ \"./src/middlewares/authMiddleware.ts\");\n//verifie la validité du format de l'email\nfunction emailValidator(email) {\n    const re = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n    return re.test(email);\n}\nconst userSchema = new mongoose_1.Schema({\n    username: { type: String, required: true, unique: true },\n    email: { type: String, required: true, unique: true, validate: emailValidator },\n    password: { type: String, required: true },\n    role: { type: String, required: true, enum: Object.values(UserInterface_ts_1.UserRole) },\n    createdAt: { type: Date, default: Date.now },\n    updatedAt: { type: Date, default: Date.now }\n});\nuserSchema.pre('save', function (next) {\n    (0, authMiddleware_ts_1.hashPassword)(next, this);\n});\nuserSchema.methods.isValidPassword = function (password) {\n    return __awaiter(this, void 0, void 0, function* () {\n        return bcrypt_1.default.compare(password, this.password);\n    });\n};\nconst User = (0, mongoose_1.model)('User', userSchema);\nexports[\"default\"] = User;\n\n\n//# sourceURL=webpack://tstemplate/./src/models/User.ts?");

/***/ }),

/***/ "./src/routes/userRoutes.ts":
/*!**********************************!*\
  !*** ./src/routes/userRoutes.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst UserController_ts_1 = __importDefault(__webpack_require__(/*! ../controllers/UserController.ts */ \"./src/controllers/UserController.ts\"));\nconst router = (0, express_1.Router)();\nrouter.post('/customers', UserController_ts_1.default.createUser);\nrouter.get('/customers', UserController_ts_1.default.getAllUsers);\nrouter.get('/customers/:id', UserController_ts_1.default.getUserById);\nrouter.put('/customers/:id', UserController_ts_1.default.updateUser);\nrouter.delete('/customers/:id', UserController_ts_1.default.deleteUser);\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack://tstemplate/./src/routes/userRoutes.ts?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;