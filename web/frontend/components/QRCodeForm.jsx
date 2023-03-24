import React from "react";
import { useState, useCallback } from "react";
import {
  Banner,
  Card,
  Form,
  FormLayout,
  TextField,
  Button,
  ChoiceList,
  Select,
  Thumbnail,
  Icon,
  Stack,
  TextStyle,
  Layout,
  EmptyState,
} from "@shopify/polaris";
import {
  ContextualSaveBar,
  ResourcePicker,
  UseAppBridge,
  useNavigate,
} from "@shopify/app-bridge-react";
import { ImageMajor, AlertMinor } from "@shopify/polaris-icons";
import { useForm, useField, noEmptyString } from "@shopify/react-form";

const NO_DISCOUNT_OPTION = { label: "No discount", value: "" };

const DISCOUNT_CODES = {};

export default QRCodeForm = ({ QRCode: InitialQRCode }) => {
  return <div>QR Codes</div>;
};
