foreach (array_combine($codes, $names) as $code => $name) {
   echo '<option value="' . $code . '">' . $name . '</option>';
}

// http://locutus.io/php/array/array_combine/