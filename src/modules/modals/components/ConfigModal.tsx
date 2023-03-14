import { usePlaceBidConstruct } from "@/lib/andrjs";
import useApp from "@/lib/app/hooks/useApp";
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    HStack,
    Text,
  } from "@chakra-ui/react";

import React, {FC, memo, useEffect, useMemo, useState } from "react";
import { useGlobalModalContext } from "../hooks";
import { ConfigModalProps } from "../types";



const ConfigModal: FC<ConfigModalProps> = (props) => {

    return(
        <Box>
            <Heading size="md" mb="6" fontWeight="bold">
                App Configuration
            </Heading>
        </Box>
    )

};


export default ConfigModal;
