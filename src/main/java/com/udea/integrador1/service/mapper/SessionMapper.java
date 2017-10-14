package com.udea.integrador1.service.mapper;

import com.udea.integrador1.domain.*;
import com.udea.integrador1.service.dto.SessionDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Session and its DTO SessionDTO.
 */
@Mapper(componentModel = "spring", uses = {CourseMapper.class, })
public interface SessionMapper extends EntityMapper <SessionDTO, Session> {

    @Mapping(source = "course.id", target = "courseId")
    SessionDTO toDto(Session session); 

    @Mapping(source = "courseId", target = "course")
    Session toEntity(SessionDTO sessionDTO); 
    default Session fromId(Long id) {
        if (id == null) {
            return null;
        }
        Session session = new Session();
        session.setId(id);
        return session;
    }
}
