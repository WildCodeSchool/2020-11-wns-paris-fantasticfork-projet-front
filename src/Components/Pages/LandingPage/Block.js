import React from "react";

import Typography from "@material-ui/core/Typography";

export default function Block() {
  return (
    <div
      style={{
        width: "90%",
        paddingLeft: "0%",
        fontFamily: "monospace",
      }}
    >
      <Typography variant="h5" component="h2">
        Sed ut perspiciatis
      </Typography>

      <Typography variant="body2" component="p">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, <br />
        sed quia consequuntur magni dolores eos qui ratione <br />
        voluptatem sequi nesciunt.
        <br /> Neque porro quisquam est..
      </Typography>
    </div>
  );
}
