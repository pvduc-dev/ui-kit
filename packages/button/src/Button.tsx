/*
 * Copyright 2021 Pv Duc
 *
 * Licensed under the Apache License, Version 2.0 (the “License”);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and limitations under the License.
 */

import React, {FC, RefObject, useRef} from 'react';
import {AriaButtonProps} from "@react-types/button";
import {useButton} from "@react-aria/button";

interface ButtonProps extends AriaButtonProps {}

const Button: FC = ({children, ...props}: ButtonProps) => {
  const ref = useRef() as RefObject<HTMLButtonElement>
  const buttonProps = useButton(props, ref)
  return (
    <button
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
