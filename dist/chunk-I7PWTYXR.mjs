import {
  BadRequest
} from "./chunk-JRO4E4TH.mjs";
import {
  prisma
} from "./chunk-JV6GRE7Y.mjs";

// src/routes/check-in.ts
import z from "zod";
async function checkIn(app) {
  app.withTypeProvider().get("/attendees/:attendeeId/check-in", {
    schema: {
      summary: "Check-in Event",
      tags: ["check-in"],
      params: z.object({
        attendeeId: z.coerce.number().int()
      }),
      response: {
        201: z.object({
          message: z.string()
        })
      }
    }
  }, async (request, reply) => {
    const { attendeeId } = request.params;
    const attendeeCheck = await prisma.checkIn.findUnique({
      where: {
        attendeeId
      }
    });
    if (attendeeCheck !== null) {
      throw new BadRequest("Attendee already checked in!");
    }
    await prisma.checkIn.create({
      data: {
        attendeeId
      }
    });
    return reply.status(201).send({
      message: "Check in successfully!"
    });
  });
}

export {
  checkIn
};
